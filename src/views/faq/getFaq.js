import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '../pagination/pagination';
const GetFaq = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);

    const onPaginationChange = (start, end) => {
        // console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };

    const [question, setQuestion] = useState([{
        id: "",
        question: "",
        chapter_meta: {
            name: "",
            subcategory_meta: {
            name: ""
        },
        },
        
        
        // minner_Activity: "",
    }]);
    const { id } = useParams();
    const [search, setSearch] = useState({});
    useEffect(() => {
        loadQuestion();

    }, [search,total,page]);
    const loadQuestion = async () => {
        let array = []
        const data = {
            page: page,
            limit: showPerPage
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        } 
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/list-faq`,data);
        for (let item of res.data.data.docs) {
            if (item.question) {
                array.push(item)
            }
        }
        await setTotal(res.data.data.total)
        setQuestion(array);
    };
  
    const onInputChange1 = async (e)=>{
        console.log("search text", e.target.name, e.target.value )
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <div>
                    <input
                        type="text"
                        className="searchBox"
                        placeholder="search here...."
                        name="text"
                        value={search.text}
                        onChange={e => onInputChange1(e)}
                    />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Questions</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        question.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.question}</td>
                            <td>{item.status}</td>
                            <td><Link className="btn btn-primary mr-2 " to={`/update/faq/${item._id}`}>Reply </Link></td>
                          
                        </tr>)
                    }
                </tbody>
            </Table>
            <ToastContainer />
            {
                total > 0? <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            />:""
            }
            {/* <Button variant="primary">Primary</Button> */}
        </div>
    )
}

export default GetFaq
