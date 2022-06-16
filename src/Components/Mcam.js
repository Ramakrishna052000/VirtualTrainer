import { Pose, POSE_CONNECTIONS, LandmarkGrid, PoseConfig } from '@mediapipe/pose'
import React, { useRef, useEffect } from "react";
import * as Poses from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { drawConnectors, drawLandmarks} from '@mediapipe/drawing_utils'
import * as ml5 from "ml5";

const videoConstraints = {
    facingMode: "user"
  };

function Mcam(props) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    var camera = null;
    const connect = window.drawConnectors;
    var nn;
    var title = props.yoga.toLowerCase();
    var time = 30;
    var completed = false;
    var count =200;
    var nextCount =195;
    var flags = true;

     function modelLoadedCallback(){
       console.log('model loaded');
  
     }
     function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
    
    function handleResults(error, result) {
        if(error){
          console.error(error);
        }
        console.log(result); 
        console.log(result[0].label);
  
        if(time==0&&completed==false)
        {
          alert("Congrates, You have successfully completed the exercise🥳");
          completed = true;
          time=30;
        }
        else if(result[0].label === title && (result[0].confidence<1 && result[0].confidence>0.05) && completed == false)
        {
          switch(result[0].label)
          {
            case "vrikshasana":
              if(result[0].confidence<1 && result[0].confidence>0.09)
              {
                flags=true;
              }
              break;
            case "virabhadrasana":
              if(result[0].confidence<1 && result[0].confidence>0.4)
              {
                flags=true;
              }
              break;
            case "pranamasana":
              if(result[0].confidence<1 && result[0].confidence>0.4)
              {
                flags=true;
              }
              break;
          }
          if(flags===true){
            flags=false;
            console.log("time: "+time+" count: "+count);
            if(time< 10)
            {
              props.setTime("00:0"+time);
            }
            else
            {
              setTimeout(props.setTime("00:"+time),10000);
            }
            if(count!=nextCount)
            {
              --count;
            }
            else
            {
              --time;
              nextCount=nextCount-5;
            }
          }
        }
        else if(completed == false)
        {
          time = 30;
          console.log("reset timmer");
          props.setTime("00:30");
        }
    }

    function onResults(results) {
      try
      {
      const camResult = [];

      for(let i=0;i<33;++i)
      {
        let x=results.poseLandmarks[i].x;
        let y=results.poseLandmarks[i].y;
        let z=results.poseLandmarks[i].z;
        let v=results.poseLandmarks[i].visibility;
        camResult.push(x);
        camResult.push(y);
        camResult.push(z);
        camResult.push(v);
      }

      nn.classify(camResult, handleResults);
    }
    catch(error)
    {
        if(error==false)
        {
            console.log("Camera is finding it hard to detect you...");
            error=true;
        }
    }
        //console.log(results.poseWorldLandmarks)
        // Define the canvas elements 
        canvasRef.current.width = webcamRef.current.video.videoWidth
        canvasRef.current.height = webcamRef.current.video.videoHeight
        // Check for useing the front camera 
        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d")
        // Define the girods here 
        // End 
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        )
        drawConnectors(canvasCtx,
          results.poseLandmarks, POSE_CONNECTIONS,
          { color: '#fff0f0', lineWidth: 2 });
        // The dots are the landmarks 
        drawLandmarks(canvasCtx, results.poseLandmarks,
          { color: '#f9c4d2', lineWidth: 2, radius: 2 });
        drawLandmarks(canvasCtx, results.poseWorldLandmarks,
          { color: '#f9c4d2', lineWidth: 2, radius: 2 });
        canvasCtx.restore();
      }


    useEffect(()=>{
        const pose = new Pose({locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
          }});

          pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: true,
            smoothSegmentation: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
          });

var nnOptions = {
            inputs: ['x1','y1','z1','v1','x2','y2','z2','v2','x3','y3','z3','v3','x4','y4','z4','v4','x5','y5','z5','v5','x6','y6','z6','v6','x7','y7','z7','v7','x8','y8','z8','v8','x9','y9','z9','v9','x10','y10','z10','v10','x11','y11','z11','v11','x12','y12','z12','v12','x13','y13','z13','v13','x14','y14','z14','v14','x15','y15','z15','v15','x16','y16','z16','v16','x17','y17','z17','v17','x18','y18','z18','v18','x19','y19','z19','v19','x20','y20','z20','v20','x21','y21','z21','v21','x22','y22','z22','v22','x23','y23','z23','v23','x24','y24','z24','v24','x25','y25','z25','v25','x26','y26','z26','v26','x27','y27','z27','v27','x28','y28','z28','v28','x29','y29','z29','v29','x30','y30','z30','v30','x31','y31','z31','v31','x32','y32','z32','v32','x33','y33','z33','v33'],
            outputs: ['class'],
            task: 'classification',
          };
          nn = ml5.neuralNetwork(nnOptions);
          console.log(nn);
          var  modelInfo = {
            model: 'https://finalyearprojectsudhanshu.s3.ap-south-1.amazonaws.com/model.json',
            metadata: 'https://finalyearprojectsudhanshu.s3.ap-south-1.amazonaws.com/model_meta.json',
            weights: 'https://finalyearprojectsudhanshu.s3.ap-south-1.amazonaws.com/model.weights.bin',
          };
          console.log('loading');
          nn.load(modelInfo,modelLoadedCallback);
          pose.onResults(onResults);

    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null)
    {
        const camera = new cam.Camera(webcamRef.current.video, {
            onFrame: async () => {
              await pose.send({image: webcamRef.current.video,});
            },
            width: 1280,
            height: 720,
          });
          camera.start();
    }
    }, []);
    return (
        <center>
          <div className="App">
            <Webcam
              mirrored={true}
              ref={webcamRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />{" "}
            <canvas
              ref={canvasRef}
              className="output_canvas"
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
                translateX:'-50%'
              }}
            ></canvas>
          </div>
        </center>
      );
    }
    
    export default Mcam;