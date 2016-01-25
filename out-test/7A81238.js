goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32588__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32589__i = 0, G__32589__a = new Array(arguments.length -  0);
while (G__32589__i < G__32589__a.length) {G__32589__a[G__32589__i] = arguments[G__32589__i + 0]; ++G__32589__i;}
  args = new cljs.core.IndexedSeq(G__32589__a,0);
} 
return G__32588__delegate.call(this,args);};
G__32588.cljs$lang$maxFixedArity = 0;
G__32588.cljs$lang$applyTo = (function (arglist__32590){
var args = cljs.core.seq(arglist__32590);
return G__32588__delegate(args);
});
G__32588.cljs$core$IFn$_invoke$arity$variadic = G__32588__delegate;
return G__32588;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32591__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32592__i = 0, G__32592__a = new Array(arguments.length -  0);
while (G__32592__i < G__32592__a.length) {G__32592__a[G__32592__i] = arguments[G__32592__i + 0]; ++G__32592__i;}
  args = new cljs.core.IndexedSeq(G__32592__a,0);
} 
return G__32591__delegate.call(this,args);};
G__32591.cljs$lang$maxFixedArity = 0;
G__32591.cljs$lang$applyTo = (function (arglist__32593){
var args = cljs.core.seq(arglist__32593);
return G__32591__delegate(args);
});
G__32591.cljs$core$IFn$_invoke$arity$variadic = G__32591__delegate;
return G__32591;
})()
;

return null;
});
