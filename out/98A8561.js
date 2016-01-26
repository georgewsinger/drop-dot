goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22789__i = 0, G__22789__a = new Array(arguments.length -  0);
while (G__22789__i < G__22789__a.length) {G__22789__a[G__22789__i] = arguments[G__22789__i + 0]; ++G__22789__i;}
  args = new cljs.core.IndexedSeq(G__22789__a,0);
} 
return G__22788__delegate.call(this,args);};
G__22788.cljs$lang$maxFixedArity = 0;
G__22788.cljs$lang$applyTo = (function (arglist__22790){
var args = cljs.core.seq(arglist__22790);
return G__22788__delegate(args);
});
G__22788.cljs$core$IFn$_invoke$arity$variadic = G__22788__delegate;
return G__22788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22792__i = 0, G__22792__a = new Array(arguments.length -  0);
while (G__22792__i < G__22792__a.length) {G__22792__a[G__22792__i] = arguments[G__22792__i + 0]; ++G__22792__i;}
  args = new cljs.core.IndexedSeq(G__22792__a,0);
} 
return G__22791__delegate.call(this,args);};
G__22791.cljs$lang$maxFixedArity = 0;
G__22791.cljs$lang$applyTo = (function (arglist__22793){
var args = cljs.core.seq(arglist__22793);
return G__22791__delegate(args);
});
G__22791.cljs$core$IFn$_invoke$arity$variadic = G__22791__delegate;
return G__22791;
})()
;

return null;
});
