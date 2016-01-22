goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13588__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13589__i = 0, G__13589__a = new Array(arguments.length -  0);
while (G__13589__i < G__13589__a.length) {G__13589__a[G__13589__i] = arguments[G__13589__i + 0]; ++G__13589__i;}
  args = new cljs.core.IndexedSeq(G__13589__a,0);
} 
return G__13588__delegate.call(this,args);};
G__13588.cljs$lang$maxFixedArity = 0;
G__13588.cljs$lang$applyTo = (function (arglist__13590){
var args = cljs.core.seq(arglist__13590);
return G__13588__delegate(args);
});
G__13588.cljs$core$IFn$_invoke$arity$variadic = G__13588__delegate;
return G__13588;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13591__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13592__i = 0, G__13592__a = new Array(arguments.length -  0);
while (G__13592__i < G__13592__a.length) {G__13592__a[G__13592__i] = arguments[G__13592__i + 0]; ++G__13592__i;}
  args = new cljs.core.IndexedSeq(G__13592__a,0);
} 
return G__13591__delegate.call(this,args);};
G__13591.cljs$lang$maxFixedArity = 0;
G__13591.cljs$lang$applyTo = (function (arglist__13593){
var args = cljs.core.seq(arglist__13593);
return G__13591__delegate(args);
});
G__13591.cljs$core$IFn$_invoke$arity$variadic = G__13591__delegate;
return G__13591;
})()
;

return null;
});
