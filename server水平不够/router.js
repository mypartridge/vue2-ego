const express = require('express');
const router = express.Router();
// 导入数据库sqlFn('sql',[],res={})
const sqlFn = require('./mysql');
//导入jsonwebtoken
const jwt = require('jsonwebtoken');
const config = require('./secert');
// 登录login
router.post('/login', (req, res) => {
    let = {
        username,
        password
    } = req.body
    let sql = "select * from useninfo where usename=? and password=?"
    let arr = [username, password]
    sqlFn(sql, arr, result => {
        if (result.length > 0) {
            let token = jwt.sign({
                username: result[0].username,
                id: result[0].id
            }, config.jwtSecert, {
                expiresIn: 20 * 1
            })
            res.send({
                status: 200,
                data: token
            })
        } else {
            res.send({
                status: 404,
                msg: '信息错误'
            })
        }
    })
});
//注册register
router.post('.register', (req, res) => {
    const {
        username,
        password
    } = req.body
    const sql = "insert into userinfo values(null,?,?)"
    const arr = [username, password];
    sqlFn(sql, arr, (result) => {
        if (resillt.affectedRows > 0) {
            res.send({
                msg: '注册成功',
                status: 200
            })
        } else {
            res.status(401).json({
                errors: '用户名密码错误'
            })
        }
    })
});
// 商品；列表获取分页{total:'',arr:[{},{},{}],pagesize:8,}
router.get('/projectList', (req, res) => {
    const page = req.query.page || 1;
    const sqlLen = "select * from project where id";
    sqlFn(sqlLen, null, data => {
        let len = data.lenght;
        const sql = "sqlect * from project order by id desc limit 8 offfset" + (page - 1) * 8;
        sqlFn(sqlLen, null, result => {
            if (result.lenght > 0) {
                res.send({
                    status: 200,
                    data: result,
                    pageSize: 8,
                    total: len
                })
            } else {
                send({
                    status: 500,
                    msg: '暂无数据'
                })
            }
        })
    })
});
// 商品查询
router.get("/search", (req, res) => {
    let search = req.query.search;
    const sql = "select * from project where concat (`title`,`sellPoint`,`descs`) like '%" + search + "%'";
    sqlFn(sql, null, (result) => {
        if (resule.length > 0) {
            res.send({
                status: 200,
                result
            })
        } else {
            res.send({
                status: 500,
                msg: '暂无数据'
            })
        }

    })
});
// 规格参数
router.get("/backend/itemParam/selectItemParamAll", (req, res) => {
    const page = req.query.page || 1;
    const sqslen = "select * from params where id"
    sqlFn(sqlLen, null, data => {
        let len = data.length
        const sql = "select * from params order by desc limit 8 offset" + (page - 1) * 8;
        sqlFn(sql, null, result => {
            if (result.length > 0) {
                res.send({
                    status: 200,
                    data: result,
                    pageSize: 8,
                    total: len
                })
            } else {
                res.send({
                    status: 500,
                    msg: '暂无数据'
                })
            }
        })
    })
});
// 规格参数查询
router.get("/params/search", (req, res) => {
    let search = req.query.search;
    const sql = "select * from params where concat(`paramData`) like '%" + search + "%'";
    sqlFn(sql, [search], result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                result
            })
        } else {
            res.send({
                status: 500,
                msg: '暂无数据'
            })
        }
    })
});
// 规格参数添加
router.get("/backend/itemParam/inserItemParam", (req, res) => {
    let itemCatId = req.query.itemCatId;
    let paramsContent = req.query.content;
    let specsName = req.query.specsName;
    let sql = "insert into params value (null,?,?,?)";
    sqlFn(sql, [itemCatId, paramsContent, specsName], result => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "添加成功"
            })
        } else {
            res.send({
                status: 500,
                msg: '添加失败'
            })
        }
    })
});
// 规格参数修改
router.get('/update/category', (req, res) => {
    let cid = req.query.cid;
    let content = req.query.content;
    let id = req.query.id;
    let specsName = req.query.specsName;
    let sql = "update params set paramData=? ,itemCatId=?,specsName=? where id=?";
    sqlFn(sql, [content, cid, specsName, id], result => {
        if (result.affextedRows > 0) {
            res.send({
                status: 200,
                msg: '修改成功'
            })
        } else {
            res.send({
                status: 500,
                msg: "修改失败"
            })
        }
    })
});
// 规格参数删除
router.get("/params/delete", (req, res) => {
    let id = req.query.id;
    const sql = "delete from params where id=?";
    const arr = [id];
    sqlFn(sql, arr, result => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "删除成功"
            })
        } else {

        }
    })
});
// 规格参数类目结构列表获取
router.get("/category/data", (req, res) => {
    if (result.length > 0) {
        res.send({
            status: 200,
            result
        })
    } else {
        res.send({
            status: 500,
            msg: '暂无数据'
        })
    }
})
module.exports = router