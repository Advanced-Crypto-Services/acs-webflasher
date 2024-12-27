'use client';

import { useState } from 'react';
import { Upload, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FirmwareFlasher() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedPort, setSelectedPort] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const { toast } = useToast();

  const mockPorts = [
    { value: 'COM1', label: 'COM1' },
    { value: 'COM2', label: 'COM2' },
    { value: 'COM3', label: 'COM3' },
  ];

  const handleConnect = async () => {
    try {
      // Mock connection logic
      setIsConnected(true);
      toast({
        title: 'Device Connected',
        description: 'Successfully connected to ESP32 device',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Connection Failed',
        description: 'Failed to connect to ESP32 device',
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.name.endsWith('.bin')) {
      setFile(selectedFile);
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid File',
        description: 'Please select a valid .bin firmware file',
      });
    }
  };

  const handleFlash = async () => {
    if (!file || !selectedPort) return;

    setIsFlashing(true);
    setProgress(0);

    // Mock flashing progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFlashing(false);
          toast({
            title: 'Flashing Complete',
            description: 'Firmware has been successfully flashed to the device',
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Flash Firmware</CardTitle>
        <CardDescription>
          Connect your ESP32 device and upload firmware to flash
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-sm font-medium">Connection Status</h3>
              <p className="text-sm text-muted-foreground">
                {isConnected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleConnect}
                    variant={isConnected ? 'outline' : 'default'}
                    className={isConnected ? 'bg-green-500/10' : ''}
                  >
                    {isConnected ? 'Connected' : 'Connect'}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connect to your ESP32 device</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select COM Port</label>
            <Select
              value={selectedPort}
              onValueChange={setSelectedPort}
              disabled={!isConnected}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a port" />
              </SelectTrigger>
              <SelectContent>
                {mockPorts.map((port) => (
                  <SelectItem key={port.value} value={port.value}>
                    {port.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Firmware File</label>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={!isConnected}
              >
                <Upload className="mr-2 h-4 w-4" />
                {file ? file.name : 'Upload Firmware'}
              </Button>
              <input
                id="file-upload"
                type="file"
                accept=".bin"
                className="hidden"
                onChange={handleFileChange}
                disabled={!isConnected}
              />
            </div>
          </div>

          {isFlashing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Flashing Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <Button
            className="w-full"
            onClick={handleFlash}
            disabled={!isConnected || !selectedPort || !file || isFlashing}
          >
            <Zap className="mr-2 h-4 w-4" />
            Flash Firmware
          </Button>

          {!isConnected && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Not Connected</AlertTitle>
              <AlertDescription>
                Please connect your ESP32 device to begin flashing.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
}