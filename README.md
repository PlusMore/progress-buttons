#Progress buttons

Shows a loading bar that is controllable inside of the button

## example

```javascript
Template.EditAccountModal.onRendered(function() {
  this.$('.progress-button').progressInitialize();
});

AutoForm.hooks({
  editAccountForm: {
    before: {
      method: function(doc) {
        var button = this.template.$('.progress-button');
        button.progressStart();
        return doc;
      }
    },
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result) {
      Messages.success('Successfully updated your account!');
      BootstrapModalPrompt.dismiss();
      var button = this.template.$('.progress-button');
      button.progressFinish();
    },
    onError: function(operation, error) {
      Messages.error(error.reason);
      var button = this.template.$('.progress-button');
      button.progressError();
    }
  },
});
```

