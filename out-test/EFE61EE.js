goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28098__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28099__i = 0, G__28099__a = new Array(arguments.length -  0);
while (G__28099__i < G__28099__a.length) {G__28099__a[G__28099__i] = arguments[G__28099__i + 0]; ++G__28099__i;}
  args = new cljs.core.IndexedSeq(G__28099__a,0);
} 
return G__28098__delegate.call(this,args);};
G__28098.cljs$lang$maxFixedArity = 0;
G__28098.cljs$lang$applyTo = (function (arglist__28100){
var args = cljs.core.seq(arglist__28100);
return G__28098__delegate(args);
});
G__28098.cljs$core$IFn$_invoke$arity$variadic = G__28098__delegate;
return G__28098;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28101__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28102__i = 0, G__28102__a = new Array(arguments.length -  0);
while (G__28102__i < G__28102__a.length) {G__28102__a[G__28102__i] = arguments[G__28102__i + 0]; ++G__28102__i;}
  args = new cljs.core.IndexedSeq(G__28102__a,0);
} 
return G__28101__delegate.call(this,args);};
G__28101.cljs$lang$maxFixedArity = 0;
G__28101.cljs$lang$applyTo = (function (arglist__28103){
var args = cljs.core.seq(arglist__28103);
return G__28101__delegate(args);
});
G__28101.cljs$core$IFn$_invoke$arity$variadic = G__28101__delegate;
return G__28101;
})()
;

return null;
});
