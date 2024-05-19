import React, { useState } from 'react';
import './TreeNode.css';

const TreeNode = ({ node }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="tree-node">
            <div className="node-content"
                 style={{ marginLeft: node.level * 20 }}>

                {node.children.length > 0 && (
                    <button className="expand-button"
                            onClick={() => setExpanded(!expanded)}>
                        {expanded ? '-' : '+'}
                    </button>
                )}
                <img src={node.photo} alt={node.name} className="node-photo" />
                <span className="node-name">{node.name}</span>
            </div>
            {expanded && (
                <div className="children">
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} />
                    ))}

                </div>
            )}
        </div>
    );
};

export default TreeNode;
