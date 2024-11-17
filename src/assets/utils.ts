import { useCallback, useEffect, useRef } from "react";
import { AppDispatch } from "./state/store";
import { clearingInterval, setDay, settingInterval } from "./state/timeManagement";
export const UNEMPLOYED = 'Unemployed';

export const startTime = (dispatch:AppDispatch,intervalId:number | null) => {
    handleClearInterval(intervalId,dispatch)
    const newIntervalId = setInterval(() => {
      dispatch(setDay());
    }, 200);
    dispatch(settingInterval(newIntervalId));
  };
export const handleClearInterval = (intervalId:number|null,dispatch:AppDispatch) => {
    if (intervalId != null) {
      clearInterval(intervalId);
      dispatch(clearingInterval())
    }
  };


  //TODO: refactor cardRemover so it will accept multiple setters 
export const useCardRemoverWhenUnfocusedBoolean = (setter: (value: boolean) => void) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleFocusChange = useCallback((event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
            setter(false);
        } else {
            setter(true);   
        }
    }, [setter]);

    useEffect(() => {
        document.addEventListener('mousedown', handleFocusChange);
        return () => {
            document.removeEventListener('mousedown', handleFocusChange);
        };
    }, [handleFocusChange]);

    return { cardRef };
};

  export const useCardRemoverWhenUnfocusedString = (setter: (value: string) => void, string: string) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleFocusChange = useCallback((event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
            setter('');
        } else {
            setter(string);
        }
    }, [setter, string]);

    useEffect(() => {
        document.addEventListener('mousedown', handleFocusChange);
        return () => {
            document.removeEventListener('mousedown', handleFocusChange);
        };
    }, [handleFocusChange]);

    return { cardRef };
};
  