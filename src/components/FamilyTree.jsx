import React, { useEffect, useState } from 'react';
import TreeNode from './TreeNode/TreeNode';

const FamilyTree = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {data.map(node => (
                <TreeNode key={node.id} node={node} />
            ))}
        </div>
    );
};

export default FamilyTree;
