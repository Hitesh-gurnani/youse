import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  interface AlertDialogDemoProps {
        agentName:string,
        prompt:string;
  }
  export function AlertDialogDemo({agentName='Hitesh',prompt='Hello from hitesh'}:AlertDialogDemoProps) {

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">show Button</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{agentName}</AlertDialogTitle>
            <AlertDialogDescription>
              {prompt}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  