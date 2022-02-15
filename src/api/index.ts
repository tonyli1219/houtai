import service from '../utils/request'

// 写文章接口
export function addEssay(data:any) {
    return service({
        url: '/essay/add_essay',
        method: 'post',
        data
    })
}

// 写文章接口
export function modifyEssay(data:any) {
    return service({
        url: '/essay/modify_essay',
        method: 'post',
        data
    })
}

// 删除文章接口
export function deleteEssay(data:any) {
    return service({
        url: '/essay/delete_essay',
        method: 'post',
        data
    })
}

// 文章列表接口
export function essayList(params:any) {
    return service({
        url: '/essay/essay_list',
        method: 'get',
        params
    })
}

// 获取文章详情接口
export function essayContent(params:any) {
    return service({
        url: '/essay/essay_content',
        method: 'get',
        params
    })
}

// md文章名字列表
export function getmdEssayList(params:any) {
    return service({
        url: '/upload/mdList',
        method: 'get',
        params
    })
}


// 获取md文章内容接口
export function getEssayDetail(params:any) {
    return service({
        url: '/upload/mdDetail',
        method: 'get',
        params
    })
}


// 获取标签列表接口
export function getEssayTagList(params:any) {
    return service({
        url: '/essay/tagList',
        method: 'get',
        params
    })
}


// 添加标签接口
export function addTag(data:any) {
    return service({
        url: '/essay/addTag',
        method: 'post',
        data
    })
}