import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
const Edit = () => {
  const params = useParams()
    return(
    <div>
      <Header 
        title={'일기 수정하기'}
        leftChild={<Button text={"뒤로가기"} onClick={()=>window.history.back()}/>}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}/>}
      />
      <Editor />
    </div>
  )
}
export default Edit;
