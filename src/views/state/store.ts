interface FullQuery {
  page?: number;
  keyword?: string;
  categoryId?: string;
}
const refRouteQuery = ref<FullQuery>({});

export function useRouteParams() {
  const route2 = useRoute();
  watchEffect(()=>{
    if(route2.query){
      refRouteQuery.value = route2.query
    }
  })
  return {
    refRouteQuery,
  };
}
