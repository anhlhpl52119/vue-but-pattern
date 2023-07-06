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
function removeItemByName(items, itemName) {
  return items.filter(item => item.name !== itemName)
    .map(item => {
      item.children = removeItemByName(item.children, itemName)
      return item
    })
 }
 
 const input = [
   {
     "id": 1,
     "name": "Viedma",
     "slug": "viedma",
     "children": []
   },
   {
     "id": 6,
     "name": "Cultura",
     "slug": "Cultura",
     "children": [
       {
         "id": 2,
         "name": "Rio Negro",
         "slug": "rio-negro",
         "children": [
           {
             "id": 4,
             "name": "Edictos",
             "slug": "edictos",
             "children": []
           },
           {
             "id": 5,
             "name": "Deportes",
             "slug": "deportes",
             "children": []
           }
         ]
       }
     ]
   },
   {
     "id": 3,
     "name": "Policiales",
     "slug": "policiales",
     "children": []
   }
 ]
 
 console.log(removeItemByName(input, 'Policiales'))