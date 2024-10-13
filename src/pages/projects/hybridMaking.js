import React from 'react';
import { Space, Table, Tag } from 'antd';
import { HelmetProvider , Helmet} from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import { dataportfolio, meta } from "../../content_option";
import { Carousel } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const contentStyle = {
  margin: 0,
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
justifyContent: 'center',
alignItems: 'center',
};



const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };




export const HybridMaking = () => {
    return (
        <HelmetProvider>
            <Container>
            <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1>Hybrid Making</h1>
        <h2>------Conference Workshop</h2>
        <div>
        <Table columns={columns} dataSource={data} />;
        <p> The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide 
            an href, but still need the element to resemble a link, use a button and change it with appropriate styles.The href attribute is required for an anchor 
            to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a 
            link, use a button and change it with appropriate styles.</p>
        
        </div>
        <Carousel>
      <div>
        <h3 style={contentStyle}><img src={'images/hybridmaking01.jpg'} alt=" " style= {imgStyle}></img></h3>
        
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    


        </Container>
        </HelmetProvider>
    );
  };
  