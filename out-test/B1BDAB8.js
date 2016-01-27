goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60784__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60785__i = 0, G__60785__a = new Array(arguments.length -  0);
while (G__60785__i < G__60785__a.length) {G__60785__a[G__60785__i] = arguments[G__60785__i + 0]; ++G__60785__i;}
  args = new cljs.core.IndexedSeq(G__60785__a,0);
} 
return G__60784__delegate.call(this,args);};
G__60784.cljs$lang$maxFixedArity = 0;
G__60784.cljs$lang$applyTo = (function (arglist__60786){
var args = cljs.core.seq(arglist__60786);
return G__60784__delegate(args);
});
G__60784.cljs$core$IFn$_invoke$arity$variadic = G__60784__delegate;
return G__60784;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60787__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60788__i = 0, G__60788__a = new Array(arguments.length -  0);
while (G__60788__i < G__60788__a.length) {G__60788__a[G__60788__i] = arguments[G__60788__i + 0]; ++G__60788__i;}
  args = new cljs.core.IndexedSeq(G__60788__a,0);
} 
return G__60787__delegate.call(this,args);};
G__60787.cljs$lang$maxFixedArity = 0;
G__60787.cljs$lang$applyTo = (function (arglist__60789){
var args = cljs.core.seq(arglist__60789);
return G__60787__delegate(args);
});
G__60787.cljs$core$IFn$_invoke$arity$variadic = G__60787__delegate;
return G__60787;
})()
;

return null;
});
