goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73216__i = 0, G__73216__a = new Array(arguments.length -  0);
while (G__73216__i < G__73216__a.length) {G__73216__a[G__73216__i] = arguments[G__73216__i + 0]; ++G__73216__i;}
  args = new cljs.core.IndexedSeq(G__73216__a,0);
} 
return G__73215__delegate.call(this,args);};
G__73215.cljs$lang$maxFixedArity = 0;
G__73215.cljs$lang$applyTo = (function (arglist__73217){
var args = cljs.core.seq(arglist__73217);
return G__73215__delegate(args);
});
G__73215.cljs$core$IFn$_invoke$arity$variadic = G__73215__delegate;
return G__73215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73219__i = 0, G__73219__a = new Array(arguments.length -  0);
while (G__73219__i < G__73219__a.length) {G__73219__a[G__73219__i] = arguments[G__73219__i + 0]; ++G__73219__i;}
  args = new cljs.core.IndexedSeq(G__73219__a,0);
} 
return G__73218__delegate.call(this,args);};
G__73218.cljs$lang$maxFixedArity = 0;
G__73218.cljs$lang$applyTo = (function (arglist__73220){
var args = cljs.core.seq(arglist__73220);
return G__73218__delegate(args);
});
G__73218.cljs$core$IFn$_invoke$arity$variadic = G__73218__delegate;
return G__73218;
})()
;

return null;
});
