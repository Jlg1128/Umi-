import React,{Component} from 'react'
import cssobj from './head_nav.less'
import {history} from 'umi'

export default class Head_nav extends Component{
    state={
        isrender:false,
        list:[
            {path:'/discover',title:'推荐'},
            {path:'/discover/toplist',title:'排行榜'},
            {path:'/discover/playlist',title:'歌单'},
            {path:'/discover/djradio',title:'主播电台'},
            {path:'/discover/artist',title:'歌手'},
            {path:'/discover/album',title:'新碟上架'},
        ]
    }
    handleClick=(path)=>{
        history.push(path)
    }
    componentWillReceiveProps(){
        this.setState({
            isrender:!this.state.isrender
        })
    }
    render(){
        const {list} = this.state
        return <div> 
            <div className={cssobj.haed_nav}>
             <ul className={cssobj.haed_nav_ul}>
                 {list.map((item,index)=>{
                     return (<li key={index}><span onClick={()=>this.handleClick(item.path)} className={cssobj.haed_nav_link} style={{backgroundColor:(item.path===history.location.pathname)?'#242424':''}} >{item.title}</span></li>)
                 })}
             </ul>
        </div>

        </div>
    }
}