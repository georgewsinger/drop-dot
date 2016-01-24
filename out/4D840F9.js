goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61626__i = 0, G__61626__a = new Array(arguments.length -  0);
while (G__61626__i < G__61626__a.length) {G__61626__a[G__61626__i] = arguments[G__61626__i + 0]; ++G__61626__i;}
  args = new cljs.core.IndexedSeq(G__61626__a,0);
} 
return G__61625__delegate.call(this,args);};
G__61625.cljs$lang$maxFixedArity = 0;
G__61625.cljs$lang$applyTo = (function (arglist__61627){
var args = cljs.core.seq(arglist__61627);
return G__61625__delegate(args);
});
G__61625.cljs$core$IFn$_invoke$arity$variadic = G__61625__delegate;
return G__61625;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61629__i = 0, G__61629__a = new Array(arguments.length -  0);
while (G__61629__i < G__61629__a.length) {G__61629__a[G__61629__i] = arguments[G__61629__i + 0]; ++G__61629__i;}
  args = new cljs.core.IndexedSeq(G__61629__a,0);
} 
return G__61628__delegate.call(this,args);};
G__61628.cljs$lang$maxFixedArity = 0;
G__61628.cljs$lang$applyTo = (function (arglist__61630){
var args = cljs.core.seq(arglist__61630);
return G__61628__delegate(args);
});
G__61628.cljs$core$IFn$_invoke$arity$variadic = G__61628__delegate;
return G__61628;
})()
;

return null;
});
