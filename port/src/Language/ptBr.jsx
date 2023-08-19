import {Body,Languages,Avatar,Spinner,Card,theme} from './../Style'
import { GithubFilled,TransactionOutlined, LinkedinFilled, FilePdfFilled, YoutubeFilled, MailFilled } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { message  } from 'antd';

export default _ =>{
    const Knowledge = async () => {
        try {
            const response = await axios.get('./db.json');
            return await response.data.knowledge; // Retorna os dados da resposta
        } catch (error) {
            return null;
        }
    };
    const KnowledgeProm = async () => {
        const data = await Knowledge(); // Espera o resultado da função fetchUserId()
        SetCards(
            <>
                {
                    data.map(el => 
                        <Card className='Card' colorBackground={el.ColorBack} colorFont={el.ColorFont}>
                            <Avatar length="160px" colorBackground={el.Colorimg}>
                                <img src={el.img} alt="" />
                            </Avatar>
                            <h1>{el.title}</h1>
                            <h2>{el.subtitlebr}</h2>
                            <p>{el.Descbr}</p>
                        </Card>)
                }
            </>
        )
        console.log(data)
    };
    const [Cards,SetCards] = useState(
        <Spinner/>
    )
    useEffect(() => {
        KnowledgeProm();
    }, []);
    const [messageApi, contextHolder] = message.useMessage();
    const Copy = str => {
        messageApi.info(str);
    };
    return <Body>
        {contextHolder}
        <Link className='languages' to={'/'}>
            <h2>Pt Br</h2>
            <TransactionOutlined />
        </Link>
        <div className='content'>
            <div className='col'>
            <Avatar length="160px" colorBackground={theme.background}>
                <img className='full' src='https://avatars.githubusercontent.com/u/133461209?s=400&u=d12631acc7f81f7999c93b52d206ead5bd314a63&v=4' alt="" />
            </Avatar>
            <h1>Pedro Bernardes</h1>
                <div className='row'>
                    <a className='icon' href="https://github.com/PedroHenriqueSBer"><GithubFilled /></a>
                    <a className='icon' href="https://www.linkedin.com/in/pedro-henrique-sousa-bernardes-645bb7256/"><LinkedinFilled /></a>
                    <button className='icon' onClick={() => {navigator.clipboard.writeText('pedrokc55@outlook.com');Copy('E-mail copiado!')}}>
                        <MailFilled />
                    </button>
                </div>
            </div>
            <div className='col'>
                <h1>Web Developer</h1>
                <p>Eu sou um web developer front end, mas estou a caminho de me tornar um full-stack!</p>
            </div>
        </div>
        <div className='content'>
            <div className='colCenter'>
                <h1>Knowledge</h1>
                <div className='grid'>
                    {Cards}
                </div>
            </div>
        </div>
    </Body>
}
