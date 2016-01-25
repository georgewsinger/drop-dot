goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__256217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__256217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256218__i = 0, G__256218__a = new Array(arguments.length -  0);
while (G__256218__i < G__256218__a.length) {G__256218__a[G__256218__i] = arguments[G__256218__i + 0]; ++G__256218__i;}
  args = new cljs.core.IndexedSeq(G__256218__a,0);
} 
return G__256217__delegate.call(this,args);};
G__256217.cljs$lang$maxFixedArity = 0;
G__256217.cljs$lang$applyTo = (function (arglist__256219){
var args = cljs.core.seq(arglist__256219);
return G__256217__delegate(args);
});
G__256217.cljs$core$IFn$_invoke$arity$variadic = G__256217__delegate;
return G__256217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__256220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__256220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256221__i = 0, G__256221__a = new Array(arguments.length -  0);
while (G__256221__i < G__256221__a.length) {G__256221__a[G__256221__i] = arguments[G__256221__i + 0]; ++G__256221__i;}
  args = new cljs.core.IndexedSeq(G__256221__a,0);
} 
return G__256220__delegate.call(this,args);};
G__256220.cljs$lang$maxFixedArity = 0;
G__256220.cljs$lang$applyTo = (function (arglist__256222){
var args = cljs.core.seq(arglist__256222);
return G__256220__delegate(args);
});
G__256220.cljs$core$IFn$_invoke$arity$variadic = G__256220__delegate;
return G__256220;
})()
;

return null;
});
