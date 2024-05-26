import React, { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import Inputcsv from "./Customnodes/Inputcsv";
import Filtercsv from "./Customnodes/Filtercsv";
import Sortcsv from "./Customnodes/Sortcsv";

const nodeTypes = {
  "inputtype": Inputcsv,
  "filtertype": Filtercsv,
  "sorttype": Sortcsv,
};

const initalNode = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { },
    type: "inputtype",
  },
  {
    id: "2",
    position: { x: 400, y: 100 },
    data: {},
    type: "filtertype",
  },
  {
    id: "3",
    position: { x: 600, y: 100 },
    data: {},
    type: "sorttype",
  }
];
const initaledges = [{ id: "", source: "", target: "", animated: true }];
function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initalNode);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initaledges);

  const onConnect = useCallback((connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length + 1}` };
    setEdges((prevEdge) => addEdge(edge, prevEdge));
  }, []);
  return (
    <div className="h-[65vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="white" style={{ backgroundColor: "#070F2B" }} />
        <Controls />
        <MiniMap
          maskColor="#070F2B"
          style={{ backgroundColor: "#070F2B" }}
          borderColor="#070F2B"
        />
      </ReactFlow>
    </div>
  );
}

export default Flow;
