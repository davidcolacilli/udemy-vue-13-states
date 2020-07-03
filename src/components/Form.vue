<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="username">User Name</label>
                <input id='username' type="text" class="form-control" placeholder="Name/rename" v-model="userData.name">
        </div>
        <div class="form-group">
            <label for="friend">New Friend</label>
                <input id='friend' type="text" class="form-control" ref="friend" placeholder="Add friend" v-model="newFriend">
        </div>
        <div class="form-group">
            <label for="otherfriend">Other New Friend</label>
                <input id='otherfriend' type="text" class="form-control" ref="otherfriend" placeholder="Add other friend" v-model="otherFriend">
        </div>    
            
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
</template>
<script>
export default {
    name: 'Form',
    data() {
        return {
            userData: {
                name: ''
            },
            newFriend: null,
            otherFriend: null
        }
    },
    methods: {
        submitForm: function() {
            //Rename
            this.$store.state.name = this.userData.name;
            
            //Add friend
            //we don't send newFriend as a parameter. Instead, we update the global friend's value
            if(this.newFriend) {
                this.$store.state.friend = this.newFriend;
                this.$store.dispatch('addFriendAction')
                this.newFriend = null;
                this.$refs.friend.focus();
            }

            //Add other friend
            //we DO send newFriend as a parameter, and we don't use the global friend's value
            if(this.otherFriend) {
                this.$store.dispatch('otherFriendAction', this.otherFriend);
                this.otherFriend = null;
                this.$refs.otherfriend.focus();
            }
        }
    }
}
</script>
<style scoped>
form {
    background: #f0f0f0;
}
</style>