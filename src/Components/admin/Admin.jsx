import { Upload,Input,Button} from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';
import './admin.css'
const ADMIN = () => {
    const categories = ['meat','vegetables','pulses']
       const [category,addcategory] = useState()
       
        function addItem(){
   categories.push(category)
      console.log(categories);
        }    
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: '',
      url: '',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <>
    <h1>Settings</h1>
    <ImgCrop rotate>
          <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
          >
              {fileList.length < 5 && '+ Upload'}
          </Upload>
      </ImgCrop>
      <div ><Input className="admin_name" placeholder='update full name' type="text" /></div>
      <div ><Input className="add_category" name='item' onChange={e=>addcategory(e.target.value)} placeholder='add new category' type="text" /> <button className='btn_add' onClick={addItem}>ADD </button></div>
      <div className="all_Categories">
        <h3>ALL CATEGORIES</h3>
     <div className="category">
       { categories[0]}
     </div>
     <div className="category">
       { categories[1]}
     </div>
     <div className="category">
       { categories[2]}
     </div>
     <div className="logout">
        <Button className='btn_logout'>Logout</Button>
     </div>
      </div>
      </>
  );


};
export default ADMIN;
