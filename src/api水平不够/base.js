const base = {
    host: 'http://localgost:8989', //域名
    goodsList: '/api/api/projectList', //商品列表
    search: '/api/api/search', //商品搜索
    selectCategory: '/api/api/backend/itemCategory/selectItemCategoryByParentId',
    addgoods: '/api/api/backend/item/insertTbem', //添加商品
    deleteGoods: '/api/api/backend/item/deleteItemById', //删除商品
    updateGoods: '/api/api/backend/item/updateTbItem', //编辑商品
    login: '/api/api/login', //登录接口
    page: '/api/api//backend/itemParam/selectItemParamAll', //规格参数
}
export default base;