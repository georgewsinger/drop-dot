goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38809__i = 0, G__38809__a = new Array(arguments.length -  0);
while (G__38809__i < G__38809__a.length) {G__38809__a[G__38809__i] = arguments[G__38809__i + 0]; ++G__38809__i;}
  args = new cljs.core.IndexedSeq(G__38809__a,0);
} 
return G__38808__delegate.call(this,args);};
G__38808.cljs$lang$maxFixedArity = 0;
G__38808.cljs$lang$applyTo = (function (arglist__38810){
var args = cljs.core.seq(arglist__38810);
return G__38808__delegate(args);
});
G__38808.cljs$core$IFn$_invoke$arity$variadic = G__38808__delegate;
return G__38808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38812__i = 0, G__38812__a = new Array(arguments.length -  0);
while (G__38812__i < G__38812__a.length) {G__38812__a[G__38812__i] = arguments[G__38812__i + 0]; ++G__38812__i;}
  args = new cljs.core.IndexedSeq(G__38812__a,0);
} 
return G__38811__delegate.call(this,args);};
G__38811.cljs$lang$maxFixedArity = 0;
G__38811.cljs$lang$applyTo = (function (arglist__38813){
var args = cljs.core.seq(arglist__38813);
return G__38811__delegate(args);
});
G__38811.cljs$core$IFn$_invoke$arity$variadic = G__38811__delegate;
return G__38811;
})()
;

return null;
});
