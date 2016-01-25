goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18933__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18934__i = 0, G__18934__a = new Array(arguments.length -  0);
while (G__18934__i < G__18934__a.length) {G__18934__a[G__18934__i] = arguments[G__18934__i + 0]; ++G__18934__i;}
  args = new cljs.core.IndexedSeq(G__18934__a,0);
} 
return G__18933__delegate.call(this,args);};
G__18933.cljs$lang$maxFixedArity = 0;
G__18933.cljs$lang$applyTo = (function (arglist__18935){
var args = cljs.core.seq(arglist__18935);
return G__18933__delegate(args);
});
G__18933.cljs$core$IFn$_invoke$arity$variadic = G__18933__delegate;
return G__18933;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18936__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18937__i = 0, G__18937__a = new Array(arguments.length -  0);
while (G__18937__i < G__18937__a.length) {G__18937__a[G__18937__i] = arguments[G__18937__i + 0]; ++G__18937__i;}
  args = new cljs.core.IndexedSeq(G__18937__a,0);
} 
return G__18936__delegate.call(this,args);};
G__18936.cljs$lang$maxFixedArity = 0;
G__18936.cljs$lang$applyTo = (function (arglist__18938){
var args = cljs.core.seq(arglist__18938);
return G__18936__delegate(args);
});
G__18936.cljs$core$IFn$_invoke$arity$variadic = G__18936__delegate;
return G__18936;
})()
;

return null;
});
