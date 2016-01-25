goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31570__i = 0, G__31570__a = new Array(arguments.length -  0);
while (G__31570__i < G__31570__a.length) {G__31570__a[G__31570__i] = arguments[G__31570__i + 0]; ++G__31570__i;}
  args = new cljs.core.IndexedSeq(G__31570__a,0);
} 
return G__31569__delegate.call(this,args);};
G__31569.cljs$lang$maxFixedArity = 0;
G__31569.cljs$lang$applyTo = (function (arglist__31571){
var args = cljs.core.seq(arglist__31571);
return G__31569__delegate(args);
});
G__31569.cljs$core$IFn$_invoke$arity$variadic = G__31569__delegate;
return G__31569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31573__i = 0, G__31573__a = new Array(arguments.length -  0);
while (G__31573__i < G__31573__a.length) {G__31573__a[G__31573__i] = arguments[G__31573__i + 0]; ++G__31573__i;}
  args = new cljs.core.IndexedSeq(G__31573__a,0);
} 
return G__31572__delegate.call(this,args);};
G__31572.cljs$lang$maxFixedArity = 0;
G__31572.cljs$lang$applyTo = (function (arglist__31574){
var args = cljs.core.seq(arglist__31574);
return G__31572__delegate(args);
});
G__31572.cljs$core$IFn$_invoke$arity$variadic = G__31572__delegate;
return G__31572;
})()
;

return null;
});
