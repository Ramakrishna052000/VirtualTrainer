import { Pose, POSE_CONNECTIONS, LandmarkGrid, PoseConfig } from '@mediapipe/pose'
import React, { useRef, useEffect } from "react";
import * as Poses from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { atan2, abs, pi } from 'mathjs'
import { drawConnectors, drawLandmarks} from '@mediapipe/drawing_utils'
import * as ml5 from "ml5";
import model from '../Model/model.json';
import metadata from '../Model/model_meta.json';
import weights from '../Model/model.weights.bin';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

const videoConstraints = {
    facingMode: "user"
  };

function ExerciseCam(props) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    var camera = null;
    const connect = window.drawConnectors;
    var left_stage = 'up';
    var right_stage = 'up';
    var left_counter = 0;
    var right_counter = 0;
    var error = false;
    var title = props.exercise;

    function Calculate(a,b,c)
    {
      var radians = atan2(c.y-b.y, c.x-b.x) - atan2(a.y-b.y, a.x-b.x);
      var angle = abs(radians*180.0/pi);
      if(angle >180.0)
        angle = 360-angle;
        
      return angle;
    }

    function BicepCurl(results)
    {
        try
        {   
            error=false;
            var right_angle = Calculate(results.poseLandmarks[12],results.poseLandmarks[14],results.poseLandmarks[16]);
            var left_angle = Calculate(results.poseLandmarks[11],results.poseLandmarks[13],results.poseLandmarks[15]);

            if(right_angle > 160)
            {
                right_stage = "down";
                console.log("right down");
            }
            if(right_angle < 30 && right_stage =='down'){
                right_stage="up";
                right_counter +=1;
                props.setRightCount(right_counter);
                console.log("right up");
                console.log("right:"+right_counter);
            }           
            if(left_angle > 160)
            {
                left_stage = "down";
                console.log("left down");
            }
            if(left_angle < 30 && left_stage =='down'){
                left_stage="up";
                left_counter +=1;
                props.setLeftCount(left_counter);
                console.log("left up");
                console.log("left:"+left_counter);
            }
        }
        catch(error)
        {
            if(error==false)
            {
                console.log("Camera is finding it hard to detect you...");
                error=true;
            }
        }
    }

    function LateralRaise(results)
    {
        try
        {   
            error=false;
            var right_angle = Calculate(results.poseLandmarks[14],results.poseLandmarks[12],results.poseLandmarks[24]);
            var left_angle = Calculate(results.poseLandmarks[13],results.poseLandmarks[11],results.poseLandmarks[23]);
        // console.log("R "+right_angle);
        // console.log("L "+left_angle);

            if(right_angle > 75 && right_stage =='up')
            {
                right_stage = "down";
                console.log("right down");
            }
            if(right_angle < 15 && right_stage =='down'){
                right_stage="up";
                right_counter +=1;
                props.setRightCount(right_counter);
                console.log("right up");
                console.log("right:"+right_counter);
            }           
            if(left_angle > 75&& left_stage=='up')
            {
                left_stage = "down";
                console.log("left down");
            }
            if(left_angle < 15 && left_stage =='down'){
                left_stage="up";
                left_counter +=1;
                props.setLeftCount(left_counter);
                console.log("left up");
                console.log("left:"+left_counter);
            }
        }
        catch(error)
        {
            if(error==false)
            {
                console.log("Camera is finding it hard to detect you...");
                error=true;
            }
        }

    }

    function ChestFly(results)
    {
        try
        {   
            error=false;
            var right_angle = Calculate(results.poseLandmarks[14],results.poseLandmarks[12],results.poseLandmarks[11]);
            var left_angle = Calculate(results.poseLandmarks[13],results.poseLandmarks[11],results.poseLandmarks[12]);


            if(right_angle > 170 && right_stage =='up')
            {
                right_stage = "down";
                console.log("right extend");
            }
            if(right_angle < 140 && right_stage =='down'){
                right_stage="up";
                right_counter +=1;
                props.setRightCount(right_counter);
                console.log("right retract");
        //   console.log("right:"+right_counter);
            }           
            if(left_angle > 170&& left_stage=='up')
            {
                left_stage = "down";
                console.log("left extend");
            }
            if(left_angle < 140 && left_stage =='down'){
                left_stage="up";
                left_counter +=1;
                props.setLeftCount(left_counter);
                console.log("left retract");
        //   console.log("left:"+left_counter);
            }
        }
        catch(error)
        {
            if(error==false)
            {
                console.log("Camera is finding it hard to detect you...");
                error=true;
            }
        }
    }

    function onResults(results) {

        switch(title)
        {
            case 'Bicep Curls':
                BicepCurl(results);
                break;
            case 'Lateral Raise':
                LateralRaise(results);
                break;
            case 'Chest Fly':
                ChestFly(results);
                break;
            default:
                console.log("cant reach this");
                break;
        }


        canvasRef.current.width = webcamRef.current.video.videoWidth
        canvasRef.current.height = webcamRef.current.video.videoHeight

        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d")

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
    
    export default ExerciseCam;
