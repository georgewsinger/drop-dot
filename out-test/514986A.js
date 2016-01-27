goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66513__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66514__i = 0, G__66514__a = new Array(arguments.length -  0);
while (G__66514__i < G__66514__a.length) {G__66514__a[G__66514__i] = arguments[G__66514__i + 0]; ++G__66514__i;}
  args = new cljs.core.IndexedSeq(G__66514__a,0);
} 
return G__66513__delegate.call(this,args);};
G__66513.cljs$lang$maxFixedArity = 0;
G__66513.cljs$lang$applyTo = (function (arglist__66515){
var args = cljs.core.seq(arglist__66515);
return G__66513__delegate(args);
});
G__66513.cljs$core$IFn$_invoke$arity$variadic = G__66513__delegate;
return G__66513;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66516__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66517__i = 0, G__66517__a = new Array(arguments.length -  0);
while (G__66517__i < G__66517__a.length) {G__66517__a[G__66517__i] = arguments[G__66517__i + 0]; ++G__66517__i;}
  args = new cljs.core.IndexedSeq(G__66517__a,0);
} 
return G__66516__delegate.call(this,args);};
G__66516.cljs$lang$maxFixedArity = 0;
G__66516.cljs$lang$applyTo = (function (arglist__66518){
var args = cljs.core.seq(arglist__66518);
return G__66516__delegate(args);
});
G__66516.cljs$core$IFn$_invoke$arity$variadic = G__66516__delegate;
return G__66516;
})()
;

return null;
});
