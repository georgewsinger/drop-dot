goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13761__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13762__i = 0, G__13762__a = new Array(arguments.length -  0);
while (G__13762__i < G__13762__a.length) {G__13762__a[G__13762__i] = arguments[G__13762__i + 0]; ++G__13762__i;}
  args = new cljs.core.IndexedSeq(G__13762__a,0);
} 
return G__13761__delegate.call(this,args);};
G__13761.cljs$lang$maxFixedArity = 0;
G__13761.cljs$lang$applyTo = (function (arglist__13763){
var args = cljs.core.seq(arglist__13763);
return G__13761__delegate(args);
});
G__13761.cljs$core$IFn$_invoke$arity$variadic = G__13761__delegate;
return G__13761;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13764__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13765__i = 0, G__13765__a = new Array(arguments.length -  0);
while (G__13765__i < G__13765__a.length) {G__13765__a[G__13765__i] = arguments[G__13765__i + 0]; ++G__13765__i;}
  args = new cljs.core.IndexedSeq(G__13765__a,0);
} 
return G__13764__delegate.call(this,args);};
G__13764.cljs$lang$maxFixedArity = 0;
G__13764.cljs$lang$applyTo = (function (arglist__13766){
var args = cljs.core.seq(arglist__13766);
return G__13764__delegate(args);
});
G__13764.cljs$core$IFn$_invoke$arity$variadic = G__13764__delegate;
return G__13764;
})()
;

return null;
});
