import type { IFeaturesItem } from '~/assets/ts/types/features';

interface IRes {
    block_heading: string;
    features: Array<IFeaturesItem>;
}

interface IState {
    block_heading: string;
    list: {
        [key: string]: Array<IFeaturesItem>
    }
}

export const useFeatures = defineStore('features', {
    state: (): IState => ({
        block_heading: '',
        list: {},
    }),

    actions: {
        async fetchList() {
            try {
                const BASE_URL = 'https://test-task-frontend-2023.slava.digital';
                const res = await useFetch<IRes>(BASE_URL, {
                    method: 'POST',
                });

                if (!res.data?.value) {
                    return false;
                }

                this.block_heading = res.data.value.block_heading;
                const modelNames = [...new Set(res.data.value.features.map(i => i.model_name))];
                this.list = modelNames.reduce((accModelNames, modelName) => ({
                    ...accModelNames,
                    [modelName]: res.data.value?.features.reduce((accItems: Array<IFeaturesItem>, curItem) => {
                        if (curItem.model_name === modelName) {
                            accItems.push({
                                ...curItem,
                                ...curItem.image && { image: `${BASE_URL}/${curItem.image}` },
                            });
                        }

                        return accItems;
                    }, [])
                        .sort((a: IFeaturesItem, b: IFeaturesItem) => a.sorting - b.sorting) || [],
                }), {});
            } catch (e) {
                console.log('STORE:FEATURES:FETCH_LIST:', e);
            }
        },

        async fetchInitial() {
            await Promise.all([
                this.fetchList(),
            ]);
        },

        addItem(item: IFeaturesItem) {
            const newArr = [...this.list[item.model_name]];
            newArr.splice(item.sorting, 0, item);
            this.list[item.model_name] = newArr.map((i, sorting) => ({
                ...i,
                sorting,
            }));
        },
    },
});
