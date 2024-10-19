import React, { useState, useRef } from 'react';
import { Mic, StopCircle, Play, Pause } from 'lucide-react';

const SpeakingPractice: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorderRef.current.addEventListener('stop', handleStop);
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('访问麦克风时出错:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      audioChunksRef.current.push(event.data);
    }
  };

  const handleStop = () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    setRecordedAudio(audioBlob);
    audioChunksRef.current = [];
  };

  const playRecordedAudio = () => {
    if (recordedAudio) {
      const audioUrl = URL.createObjectURL(recordedAudio);
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
  };

  const pauseRecordedAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">雅思口语练习</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>话题：描述一个你喜欢去的地方</p>
                <ul className="list-disc space-y-2">
                  <li>它在哪里？</li>
                  <li>你多久去一次？</li>
                  <li>你在那里做什么？</li>
                  <li>你为什么喜欢它？</li>
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>你有1分钟准备时间。然后说1-2分钟。</p>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <div className="flex justify-center space-x-4">
                  {!isRecording && !recordedAudio && (
                    <button
                      onClick={startRecording}
                      className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    >
                      <Mic className="inline-block mr-2" />
                      开始录音
                    </button>
                  )}
                  {isRecording && (
                    <button
                      onClick={stopRecording}
                      className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    >
                      <StopCircle className="inline-block mr-2" />
                      停止录音
                    </button>
                  )}
                  {recordedAudio && !isPlaying && (
                    <button
                      onClick={playRecordedAudio}
                      className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                    >
                      <Play className="inline-block mr-2" />
                      播放录音
                    </button>
                  )}
                  {recordedAudio && isPlaying && (
                    <button
                      onClick={pauseRecordedAudio}
                      className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                    >
                      <Pause className="inline-block mr-2" />
                      暂停录音
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingPractice;