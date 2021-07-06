import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Table } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import samplefile from '../../assets/samplesheet.xlsx'

const AddQuestion = () => {
  let history = useHistory();
  const [questions, setQuestion] = useState({
    question: "",
    content: "",
    image: "",
    difficulty_level: "",
    category_meta: {},
    chapter_meta: {},
    subcategory_meta: {},
    info: "",
    flage: "",
    pin: ""
  });

  const [subcategory, setSubCategory] = useState([]);
  const [subcategorymeta, setSubCategorymeta] = useState();

  const [chapter, setChapter] = useState([]);
  const [chaptermeta, setChaptermeta] = useState();

  const [category, setCategory] = useState([]);
  const [categorymeta, setCategorymeta] = useState();
  // const options = {
  //   headers: {'token': localStorage.getItem('token')}
  // };
  const [options, setOptions] = useState();
  const { question, content, info, pin, flag } = questions;
  useEffect(() => {
    loadCategory()
  }, []);
  const onInputChangeOptions = e => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };
  const onInputChange = e => {
    setQuestion({ ...questions, [e.target.name]: e.target.value });
  };
  const onInputChange1 = async (e) => {
    await setCategorymeta(category[e.target.value])
    loadSubCategory(category[e.target.value])
  };
  const onInputChange2 = async (e) => {
    await setSubCategorymeta(subcategory[e.target.value])
    await loadChapter(subcategory[e.target.value])
  };

  const onInputChange3 = async (e) => {
    await setChaptermeta(chapter[e.target.value])
  };
  const loadCategory = async () => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/category-list`).then((data1) => {
      setCategory(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
    })
  }
  const loadSubCategory = async (item) => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/subcategory-list?_id=${item._id}`).then((data1) => {
      setSubCategory(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
    })
  }
  const loadChapter = async (item) => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/chapter-list?_id=${item._id}`).then((data1) => {
      setChapter(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
    })
  }
  const [image, setImage] = useState({
    file: null,
    A: null,
    B: null,
    C: null,
    D: null,
  });
  const [filepath, setFilepath] = useState();
  const onSetXlxFile = async e => {
    console.warn("............image....", [e.target.name], e.target.files[0])
    const formData = new FormData();
    formData.append(
      "xlsSheet",
      e.target.files[0],
    );
    console.warn("xlsfile", formData)
    const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/uploade-sheet`, formData, { "Content-Type": "multipart/form-data" });
    console.log("response", res.data)
    if (res.data.code == 200) {
      setFilepath(res.data.data)
    } else {
      console.warn("error", res.data.message)
    }
    console.log("filepath", filepath)
  }
  const onInputChangeImage = async e => {
    console.warn("............image....", [e.target.name], e.target.files[0])
    // let image_as_base64 = URL.createObjectURL(e.target.files[0])
    // let image_as_files = e.target.files[0];
    // console.log(" URL.createObjectURL", image_as_base64)

    // setImage({ file: image_as_files })
    let reader = await new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async function () {
      console.warn("................", reader.result)
      // await setImage( {...image, [e.target.name]: reader.result })
      let data = {}
      if (e.target.name == "A") {
        data.image = reader.result
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, data);
        if (res.data.code == 200) {
          setOptions({ ...options, A: res.data.data });
          toast(res.data.message);
          console.warn("response", res.data.data)
          // await setCategory({ ...category, image: res.data.data });

        }
      }
      if (e.target.name == "B") {
        data.image = reader.result
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, data);
        if (res.data.code == 200) {
          setOptions({ ...options, B: res.data.data });
          toast(res.data.message);
          console.warn("response", res.data.data)
          // await setCategory({ ...category, image: res.data.data });

        }
      }
      if (e.target.name == "C") {
        data.image = reader.result
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, data);
        if (res.data.code == 200) {
          setOptions({ ...options, C: res.data.data });
          toast(res.data.message);
          console.warn("response", res.data.data)
          // await setCategory({ ...category, image: res.data.data });

        }
      }
      if (e.target.name == "D") {
        data.image = reader.result
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, data);
        if (res.data.code == 200) {
          setOptions({ ...options, D: res.data.data });
          toast(res.data.message);
          console.warn("response", res.data.data)
          // await setCategory({ ...category, image: res.data.data });

        }
      }
      if (e.target.name == 'file') {
        data.image = reader.result
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, data);
        if (res.data.code == 200) {
          setQuestion({ ...questions, question: res.data.data });
          toast(res.data.message);
          console.warn("response", res.data.data)
          // await setCategory({ ...category, image: res.data.data });

        }
      }
    }
    // return
  };


  const onSubmit = async e => {
    e.preventDefault();
    if (subcategorymeta && chaptermeta && categorymeta) {
      questions.category_meta = categorymeta
      questions.chapter_meta = chaptermeta
      questions.subcategory_meta = subcategorymeta
      questions.options = options

      console.warn("onsumbit", questions)
      if (type == 'xml'){
        let data ={}
        data.category_meta = categorymeta
        data.chapter_meta = chaptermeta
        data.subcategory_meta = subcategorymeta
        data.path = filepath
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/insert-data`, data);
        toast(res.data.message);
        setTimeout(function () { history.push("/questions"); }, 1000);
      }else{
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-question`, questions);
        toast(res.data.message);
        setTimeout(function () { history.push("/questions"); }, 1000);
      }
    
    } else {
      alert("please select any subcategory and chaptermeta")
    }
  };
  const [type, setType] = useState('true');
  const [optionNo, setoptionNo] = useState('4');
  const onInputSelectNumber = async e => {
    console.log("hiiiiiiii", e.target.value)
    setoptionNo(e.target.value)
  };
  // const [selectedFile, setSelectedFile] = useState(null);
  const onInputSelect = async e => {
    console.log("e.target.valueup", e.target.value)
    setType(e.target.value)
    console.log("e.target.valuedown", e.target.value)
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add question</h2>
        <form onSubmit={e => onSubmit(e)}>

          <div class="form-group col-sm-6">
            <label>Select Category *</label>
            <select class="form-control"
              onChange={e => onInputChange1(e)} >
              <option value={"N/A"}>
                {"Select"}
              </option>
              {
                category.map((option, index) =>

                  <option key={index} value={index}>
                    {option.name}
                  </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>

          <div class="form-group col-sm-6">
            <label>Select Sub Category *</label>
            <select class="form-control"
              onChange={e => onInputChange2(e)} >
              <option value={"N/A"}>
                {"Select"}
              </option>
              {
                subcategory.map((option, index) =>

                  <option key={index} value={index}>
                    {option.name}
                  </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
          <div class="form-group col-sm-6">
            <label>Select Chapter *</label>
            <select class="form-control"
              onChange={e => onInputChange3(e)} >
              <option value={"N/A"}>
                {"Select"}
              </option>
              {
                chapter.map((option, index) =>

                  <option key={index} value={index}>
                    {option.name}
                  </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
          <h4>Question Type</h4>
          <div value={type} onChange={e => onInputSelect(e)}>
            <input type="radio" value="true" name="type" /> text
            <input type="radio" value="false" name="type" /> image
            <input type="radio" value="xml" name="type" /> upload Xml File
          </div>
          <div>
            <br></br>
          {
            type == 'xml' ? <a  className="btn btn-primary" href={samplefile} download>Download Sample File </a>:""
          }
          </div>
          <div>
          <br></br>
          {type == 'xml' ? <input
            type="file"
            className="form-control form-control-lg"
            placeholder="select you image question description"
            name="file"
            // value={question}
            onChange={e => onSetXlxFile(e)}
          /> : <div>
            <div> <h4>Option Number</h4>
              <div onChange={e => onInputSelectNumber(e)}>
                <input type="radio" value="3" name="optionNo" /> Three
                <input type="radio" value="4" name="optionNo" /> Four
              </div></div>
            <div className="form-group">
              <label> Question</label>
              {type == 'true' ? <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter question description"
                name="question"
                value={question}
                onChange={e => onInputChange(e)}
              /> : <input
                type="file"
                className="form-control form-control-lg"
                placeholder="select you image question description"
                name="file"
                // value={question}
                onChange={e => onInputChangeImage(e)}
              />
              }
            </div>

            <div className="form-group">
              <label> Options A</label>
              {type == 'true' ?
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Options A"
                  name="A"
                  // value={options}
                  onChange={e => onInputChangeOptions(e)}
                /> : <input
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="select you image Enter Options A"
                  name="A"
                  // value={question}
                  onChange={e => onInputChangeImage(e)}
                />}
              {/* {type == 'true'?"": <Button name = "A" onClick = {e =>uploadImage(e)}>submit</Button>} */}
            </div>
            <div className="form-group">
              <label>  Options B</label>
              {type == 'true' ? <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Options B"
                name="B"
                // value={options}
                onChange={e => onInputChangeOptions(e)}
              /> : <input
                type="file"
                className="form-control form-control-lg"
                placeholder="select you image Enter Options B"
                name="B"
                // value={question}
                onChange={e => onInputChangeImage(e)}
              />}
              {/* {type == 'true'?"": <Button name = "B" onClick = {e =>uploadImage(e)}>submit</Button>} */}

            </div>
            <div className="form-group">
              <label>  Options C</label>
              {type == 'true' ? <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Options C"
                name="C"
                // value={options}
                onChange={e => onInputChangeOptions(e)}
              /> : <input
                type="file"
                className="form-control form-control-lg"
                placeholder="select you image Enter Options C"
                name="C"
                // value={question}
                onChange={e => onInputChangeImage(e)}
              />}
              {/* {type == 'true'?"": <Button name = "C" onClick = {e =>uploadImage(e)}>submit</Button>} */}

            </div>
            {optionNo == "4" ? <div className="form-group">
              <label>  Options D</label>
              {type == 'true' ?
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Options D"
                  name="D"
                  // value={options}
                  onChange={e => onInputChangeOptions(e)}
                /> : <input
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="select you image Enter Options D"
                  name="D"
                  // value={question}
                  onChange={e => onInputChangeImage(e)}
                />}
              {/* {type == 'true'?"": <Button name = "D" onClick = {e =>uploadImage(e)}>submit</Button>} */}
            </div>
              : ""}
            <div class="form-group col-sm-6">
              <label>Select Correct Answer *</label>
              <select class="form-control" name="answer"
                onChange={e => onInputChangeOptions(e)} >
                <option value={"A"}> A </option>
                <option value={"B"}> B </option>
                <option value={"C"}> C </option>
                {optionNo == "4" ? <option value={"D"}> D </option> : ""}

              </select>
            </div>
            <div class="form-group col-sm-6">
              <label>deficulti level *</label>
              <select class="form-control" name="difficulty_level"
                onChange={e => onInputChange(e)} >
                <option value={"0"}> Low </option>
                <option value={"1"}> Medium </option>
                <option value={"2"}> High </option>
                {/* <option  value={"D"}> D </option> */}
              </select>
            </div>
            <div className="form-group">
              <label> Info</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter info description"
                name="info"
                value={info}
                onChange={e => onInputChange(e)}
              />
            </div>

          </div>
          }
          </div>
          
          <button className="btn btn-primary btn-block">Add question</button>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AddQuestion;