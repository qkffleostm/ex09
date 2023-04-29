import axios from 'axios';
import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import {useEffect} from 'react';
import { useState } from 'react';

const LocalPage = () => {
    const [locals, setLocals] = useState([]);
    const getLocal = async() => {
        const url = "https://dapi.kakao.com/v2/local/search/keyword.json"
        const config = {
            headers: {"Authorization": "KakaoAK b80880fbde422de3fd9b4a4e67c9bb54"},
            params: {query: "인하대", page:1, size:5}
        }
        const result= await axios.get(url, config);
        console.log(result);
        setLocals(result.data.documents);
    }

    useEffect(()=>{
        getLocal();
    }, []);

    return (
        <Row>
            <Col>
                <h1 className='text-center my-5'>지역검색</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <td>장소명</td>
                            <td>주소</td>
                            <td>전화</td>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map(local=>
                            <tr key={local.id}>
                                <td>{local.place_name}</td>
                                <td>{local.phone}</td>
                                <td>{local.address_name}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default LocalPage