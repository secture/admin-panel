import store from '@/store'

const MessageService = {
  dispatchError: function(error: any, action: any, prefix: any) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + error.code,
        body: error.message,
        type: 'error',
      },
    })
  },
  dispatchWarning: function(code: any, action: any, prefix: any) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'warning',
      },
    })
  },
  dispatchSuccess: function(code: any, action: any, prefix: any) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'success',
      },
    })
  },
  dispatchInfo: function(code: any, action: any, prefix: any) {
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
