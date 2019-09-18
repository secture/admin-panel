import store from '@/store'

const MessageService = {
  dispatchError: function(error: any, action: string, prefix: string) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + error.code,
        body: error.message,
        type: 'error',
      },
    })
  },
  dispatchWarning: function(code: string, action: string, prefix: string) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'warning',
      },
    })
  },
  dispatchSuccess: function(code: string, action: string, prefix: string) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'success',
      },
    })
  },
  dispatchInfo: function(code: string, action: string, prefix: string) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'info',
      },
    })
  },
}

export default MessageService
