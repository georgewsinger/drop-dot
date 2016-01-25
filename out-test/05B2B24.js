goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59032__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59033__i = 0, G__59033__a = new Array(arguments.length -  0);
while (G__59033__i < G__59033__a.length) {G__59033__a[G__59033__i] = arguments[G__59033__i + 0]; ++G__59033__i;}
  args = new cljs.core.IndexedSeq(G__59033__a,0);
} 
return G__59032__delegate.call(this,args);};
G__59032.cljs$lang$maxFixedArity = 0;
G__59032.cljs$lang$applyTo = (function (arglist__59034){
var args = cljs.core.seq(arglist__59034);
return G__59032__delegate(args);
});
G__59032.cljs$core$IFn$_invoke$arity$variadic = G__59032__delegate;
return G__59032;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59035__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59036__i = 0, G__59036__a = new Array(arguments.length -  0);
while (G__59036__i < G__59036__a.length) {G__59036__a[G__59036__i] = arguments[G__59036__i + 0]; ++G__59036__i;}
  args = new cljs.core.IndexedSeq(G__59036__a,0);
} 
return G__59035__delegate.call(this,args);};
G__59035.cljs$lang$maxFixedArity = 0;
G__59035.cljs$lang$applyTo = (function (arglist__59037){
var args = cljs.core.seq(arglist__59037);
return G__59035__delegate(args);
});
G__59035.cljs$core$IFn$_invoke$arity$variadic = G__59035__delegate;
return G__59035;
})()
;

return null;
});
