'use strict';jQuery(function($){$(document).on('click','.ac-notice [data-dismiss], .ac-notice button.notice-dismiss',function(e){e.preventDefault();var $notice=$(this).parents('.ac-notice');var name=$notice.data('name');if(!name){return false}$notice.fadeOut(500,function(){$notice.remove()});$.post(ajaxurl,{action:'ac_notice_dismiss_'+name,name:name,_ajax_nonce:$notice.data('nonce')})})});