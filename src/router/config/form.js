import layout from "@/layout"

const routes = [
  {
    path: '/form',
    component: layout,
    name: 'form',
    meta: { title: 'Form' },
    children: [
      {
        path: 'filter',
        component: () => import(/* webpackChunkName: "form */  '@/views/form/filter'),
        name: 'formFilter',
        meta: { title: 'Filter' }
      }
    ]
  }
]

export default routes