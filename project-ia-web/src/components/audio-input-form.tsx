import { FileMusic, Upload } from 'lucide-react';
import { Separator } from './ui/separator';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useMemo, useState, useRef } from 'react';

export function AudioInputForm() {
  // States
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const promptInputRef = useRef<HTMLTextAreaElement>(null)

  // Select MP3
  function handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget

    if (!files) {
      return
    }

    const selectFile = files[0]

    setAudioFile(selectFile)
  }

  // Upload MP3
  function handleUploadAudio(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if (!audioFile) {
      return
    }

    // Do something with the audioFile, e.g., upload it
  }

  // Preview FILE
  const previewURL = useMemo(() => {
    if (!audioFile) {
      return null
    }

    return URL.createObjectURL(audioFile) // Preview URL

  }, [audioFile])

  // Component
  return (
    <form onSubmit={handleUploadAudio} className='space-y-6'>
      <label
        htmlFor="audio"
        className=' relative border flex rounded aspect-video cursor-pointer border-dashed text-sm flex-col gap-2	items-center justify-center text-muted-foreground hover:bg-primary/5 text-center'>

        {previewURL ? (
          <audio src={previewURL} controls className="flex inset-0 items-center justify-center" />
        ) : (
          <>
            <FileMusic className="w-4 h-4" />
            Selecione um áudio
          </>
        )}

      </label>
      <input type="file" id="audio" accept='audio/mp3' className='sr-only' onChange={handleFileSelected} />

      <Separator />
      <div className='space-y-2'>

        <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>

        <Textarea
          ref={promptInputRef}
          id='transcription_prompt'
          className='h-20 leading-relaxed rounded resize-none'
          placeholder='Inclua palavras-chaves mencionadas no áudio separadas por vírgula (,)'
        />

      </div>
      <Button type='submit' className='w-full rounded'>Carregar Áudio <Upload className='w-4 h-4 ml-2' /></Button>
    </form>
  )
}
