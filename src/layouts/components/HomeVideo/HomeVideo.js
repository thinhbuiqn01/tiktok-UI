import { useEffect, useState } from 'react';
import Name from './Name';
const axios = require('axios').default;
function HomeVideo() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        /* [
                {
                "name": "Thịnh JS1",
                "avatar": "avatar"
                },
                {
                "name": "Thịnh JS2",
                "avatar": "avatar"
                },
                {
                "name": "Thịnh JS3",
                "avatar": "avatar"
                }
            ]
         */
        fetch('http://127.0.0.1:8000/fake-api')
            .then((res) => res.json())
            .then((res) => {
                const data = res;
                console.log(data);
                // handle success@@
                setResult(res);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
        return;
    }, []);

    // lần đâu nói mount vào DOM mà api chưa kịp call nên nó bị rỗng nên nó không phải là mảng nên nó lỗi thêm dẩu "?" là đc
    return (
        <div>
            {result?.map((result, index) => (
                <Name data={result} key={index} />
            ))}
        </div>
    );
}

export default HomeVideo;
