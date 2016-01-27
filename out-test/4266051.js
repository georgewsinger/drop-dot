goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168262__i = 0, G__168262__a = new Array(arguments.length -  0);
while (G__168262__i < G__168262__a.length) {G__168262__a[G__168262__i] = arguments[G__168262__i + 0]; ++G__168262__i;}
  args = new cljs.core.IndexedSeq(G__168262__a,0);
} 
return G__168261__delegate.call(this,args);};
G__168261.cljs$lang$maxFixedArity = 0;
G__168261.cljs$lang$applyTo = (function (arglist__168263){
var args = cljs.core.seq(arglist__168263);
return G__168261__delegate(args);
});
G__168261.cljs$core$IFn$_invoke$arity$variadic = G__168261__delegate;
return G__168261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__168264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__168264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168265__i = 0, G__168265__a = new Array(arguments.length -  0);
while (G__168265__i < G__168265__a.length) {G__168265__a[G__168265__i] = arguments[G__168265__i + 0]; ++G__168265__i;}
  args = new cljs.core.IndexedSeq(G__168265__a,0);
} 
return G__168264__delegate.call(this,args);};
G__168264.cljs$lang$maxFixedArity = 0;
G__168264.cljs$lang$applyTo = (function (arglist__168266){
var args = cljs.core.seq(arglist__168266);
return G__168264__delegate(args);
});
G__168264.cljs$core$IFn$_invoke$arity$variadic = G__168264__delegate;
return G__168264;
})()
;

return null;
});
