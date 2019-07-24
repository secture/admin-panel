import store from '@/store'

const MessageService = {
  dispatchError: function(error, action, prefix) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + error.code,
        body: error.message,
        type: 'error',
      },
    })
  },
  dispatchWarning: function(code, action, prefix) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'warning',
      },
    })
  },
  dispatchSuccess: function(code, action, prefix) {
    store.dispatch(action, {
      showToaster: true,
      message: {
        code: prefix + code,
        body: '',
        type: 'success',
      },
    })
  },
  dispatchInfo: function(code, action, prefix) {
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
