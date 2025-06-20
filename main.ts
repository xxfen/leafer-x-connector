import { App,Group, Rect, Ellipse } from 'leafer-ui'
import { LeaferXQnConnector,IConnectorOption } from "./src/index";
import '@leafer-in/editor' // 导入图形编辑器插件 //
// import { QnConnector } from "leafer-x-connector";
 const app = new App({
     view: window,
	 tree: {
	 	type: 'viewport'
	 }, // 添加 tree 层
	 sky: {},
     editor: {
		 lockRatio: true,
	 }, // 会自动创建 editor实例、tree层、sky层
 })

const elipse = new Ellipse({ 
    x: 150, 
    y: 150,  
    fill: '#32cd79',  
    draggable: true,
	editable: true,
}) 
const rect = new Rect({ 
    x: 350,
    y: 250,
    fill: '#323379', 
    draggable: true,
    stroke: '#ccc',
    strokeWidth: 15,
	editable: true,
}) 

const opt:IConnectorOption = {
    opt1:{
        // side:'t',
        arrow:'square',
        // margin:25,
    },
    opt2:{
        // side:'r',
        percent:0.8,
        arrow:'triangle',
        // margin:5,
    },
    padding:20,
    // margin:10,
    etc:{
        // text,
        app
    },
    onDraw:(param)=>{
        // console.log(`param::`,param)
        return param.path
    }
}
const conn = new LeaferXQnConnector(elipse,rect,opt) 

const group = new Group({ 
    x: 100,
    y: 100
})

group.add(rect)
group.add(elipse)
// leafer.add(conn)
app.tree.add(group)
group.add(conn)