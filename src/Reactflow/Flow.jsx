import React, { useCallback, useEffect, useContext } from "react";
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
import { CsvDataContext } from "../Context/CsvDataContext";
import Serach from "./Customnodes/Serach";

const nodeTypes = {
  inputtype: Inputcsv,
  filtertype: Filtercsv,
  sorttype: Sortcsv,
  Serach: Serach,
};

function Flow({ data, uploaded, handleFileChange, message, error }) {
  // console.log(data);
  const {updateCsvData} = useContext(CsvDataContext);
  
  useEffect(() => {
    updateCsvData(data);
  }, [data]);

  const initialNodes = [
    {
      id: "1",
      position: { x: 100, y: 100 },
      data: {
        csvDatain: data,
        error,
        message,
        handleFileChange,
        uploaded,
        label: "Input",
      },
      type: "inputtype",
    },
    {
      id: "2",
      position: { x: 400, y: 100 },
      data: { label: "Filter", csvData: [], columnNames: [] },
      type: "filtertype",
    },
    {
      id: "3",
      position: { x: 600, y: 100 },
      data: { label: "Sort", csvData: [], columnNames: [] },
      type: "sorttype",
    },
    {
      id: "4",
      position: { x: 800, y: 100 },
      data: { label: "Search", csvData: [], columnNames: [] },
      type: "Serach",
    }
  ];

  const initialEdges = [];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      const newEdge = { ...params, animated: true, style: { stroke: "#6E85B7", strokeWidth: 2 } };
      setEdges((prevEdges) => addEdge(newEdge, prevEdges));

      const sourceNode = nodes.find((node) => node.id === params.source);
      const targetNode = nodes.find((node) => node.id === params.target);

      if (sourceNode && targetNode) {
        const csvData = sourceNode.data.csvData || [];
        const columnNames = csvData.length > 0 ? Object.keys(csvData[0]) : [];

        const newData = { ...targetNode.data, csvData, columnNames };
        setNodes((nds) =>
          nds.map((node) =>
            node.id === params.target ? { ...node, data: newData } : node
          )
        );
      }
    },
    [nodes, setEdges, setNodes]
  );

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === "1"
          ? {
              ...node,
              data: {
                ...node.data,
                csvData: data,
                error,
                message,
                handleFileChange,
                uploaded,
              },
            }
          : node
      )
    );
  }, [data, error, message, handleFileChange, uploaded, setNodes]);

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
        <Background
          color="#6E85B7"
          gap={16}
          size={1}
          style={{ backgroundColor: "#070F2B" }}
        />
        <Controls style={{ backgroundColor: "#1B1F3B", color: "#6E85B7" }} />
        <MiniMap
          nodeColor={() => "#6E85B7"}
          nodeStrokeWidth={2}
          maskColor="#070F2B"
          style={{ backgroundColor: "#070F2B" }}
          borderColor="#1B1F3B"
        />
      </ReactFlow>
    </div>
  );
}

export default Flow;
