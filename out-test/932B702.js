goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77927__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77928__i = 0, G__77928__a = new Array(arguments.length -  0);
while (G__77928__i < G__77928__a.length) {G__77928__a[G__77928__i] = arguments[G__77928__i + 0]; ++G__77928__i;}
  args = new cljs.core.IndexedSeq(G__77928__a,0);
} 
return G__77927__delegate.call(this,args);};
G__77927.cljs$lang$maxFixedArity = 0;
G__77927.cljs$lang$applyTo = (function (arglist__77929){
var args = cljs.core.seq(arglist__77929);
return G__77927__delegate(args);
});
G__77927.cljs$core$IFn$_invoke$arity$variadic = G__77927__delegate;
return G__77927;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77930__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77931__i = 0, G__77931__a = new Array(arguments.length -  0);
while (G__77931__i < G__77931__a.length) {G__77931__a[G__77931__i] = arguments[G__77931__i + 0]; ++G__77931__i;}
  args = new cljs.core.IndexedSeq(G__77931__a,0);
} 
return G__77930__delegate.call(this,args);};
G__77930.cljs$lang$maxFixedArity = 0;
G__77930.cljs$lang$applyTo = (function (arglist__77932){
var args = cljs.core.seq(arglist__77932);
return G__77930__delegate(args);
});
G__77930.cljs$core$IFn$_invoke$arity$variadic = G__77930__delegate;
return G__77930;
})()
;

return null;
});
