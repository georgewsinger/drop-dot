goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68961__i = 0, G__68961__a = new Array(arguments.length -  0);
while (G__68961__i < G__68961__a.length) {G__68961__a[G__68961__i] = arguments[G__68961__i + 0]; ++G__68961__i;}
  args = new cljs.core.IndexedSeq(G__68961__a,0);
} 
return G__68960__delegate.call(this,args);};
G__68960.cljs$lang$maxFixedArity = 0;
G__68960.cljs$lang$applyTo = (function (arglist__68962){
var args = cljs.core.seq(arglist__68962);
return G__68960__delegate(args);
});
G__68960.cljs$core$IFn$_invoke$arity$variadic = G__68960__delegate;
return G__68960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68964__i = 0, G__68964__a = new Array(arguments.length -  0);
while (G__68964__i < G__68964__a.length) {G__68964__a[G__68964__i] = arguments[G__68964__i + 0]; ++G__68964__i;}
  args = new cljs.core.IndexedSeq(G__68964__a,0);
} 
return G__68963__delegate.call(this,args);};
G__68963.cljs$lang$maxFixedArity = 0;
G__68963.cljs$lang$applyTo = (function (arglist__68965){
var args = cljs.core.seq(arglist__68965);
return G__68963__delegate(args);
});
G__68963.cljs$core$IFn$_invoke$arity$variadic = G__68963__delegate;
return G__68963;
})()
;

return null;
});
