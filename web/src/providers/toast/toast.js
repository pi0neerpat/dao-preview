import { Toaster, ToastBar, toast, useToasterStore } from '@redwoodjs/web/toast'

import { useTheme } from 'src/providers/theme'

import LoadingDots from 'src/components/LoadingDots'

const ToastContext = React.createContext({
  mintStatus: null,
  mintError: null,
})

// https://react-hot-toast.com/docs/toaster

const ToastProvider = ({ children }) => {
  const { toasts } = useToasterStore()
  const { theme } = useTheme()

  return (
    <ToastContext.Provider
      value={{
        toast,
        toasts,
      }}
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: '',
          style: {
            // border: '1px solid #713200',
            // padding: '16px',
            color: theme.colors.black,
            fontSize: '14px',
          },
          success: { duration: 5000 },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                <div className="mr-2">
                  {t.type === 'loading' ? <LoadingDots /> : icon}
                </div>
                {message}
                {t.type === 'loading' && (
                  <button className="ml-2" onClick={() => toast.dismiss(t.id)}>
                    X
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => React.useContext(ToastContext)

export { ToastProvider, useToast }
