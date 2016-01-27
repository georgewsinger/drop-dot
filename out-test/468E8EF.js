goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87570__i = 0, G__87570__a = new Array(arguments.length -  0);
while (G__87570__i < G__87570__a.length) {G__87570__a[G__87570__i] = arguments[G__87570__i + 0]; ++G__87570__i;}
  args = new cljs.core.IndexedSeq(G__87570__a,0);
} 
return G__87569__delegate.call(this,args);};
G__87569.cljs$lang$maxFixedArity = 0;
G__87569.cljs$lang$applyTo = (function (arglist__87571){
var args = cljs.core.seq(arglist__87571);
return G__87569__delegate(args);
});
G__87569.cljs$core$IFn$_invoke$arity$variadic = G__87569__delegate;
return G__87569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87573__i = 0, G__87573__a = new Array(arguments.length -  0);
while (G__87573__i < G__87573__a.length) {G__87573__a[G__87573__i] = arguments[G__87573__i + 0]; ++G__87573__i;}
  args = new cljs.core.IndexedSeq(G__87573__a,0);
} 
return G__87572__delegate.call(this,args);};
G__87572.cljs$lang$maxFixedArity = 0;
G__87572.cljs$lang$applyTo = (function (arglist__87574){
var args = cljs.core.seq(arglist__87574);
return G__87572__delegate(args);
});
G__87572.cljs$core$IFn$_invoke$arity$variadic = G__87572__delegate;
return G__87572;
})()
;

return null;
});
